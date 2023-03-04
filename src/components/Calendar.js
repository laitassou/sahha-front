import React, { Fragment, useCallback, useMemo, useState, useContext } from 'react';

import PropTypes from 'prop-types';
//import events from '../resources/events'
import { Calendar, Views, DateLocalizer } from 'react-big-calendar';
import Card from '../resources/Card';
import DemoLink from './DemoLink.component';
// Storybook cannot alias this, so you would use 'react-big-calendar/lib/addons/dragAndDrop'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
// Storybook cannot alias this, so you would use 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss';

import InputBox from './InputBox';
import AuthContext from '../context/AuthContext';

const DragAndDropCalendar = withDragAndDrop(Calendar);

var events = [];

var id_from_db = 0;

const formatName = (name, count) => `${name} ID ${count}`;

export default function DnDOutsideResource({ localizer, data }) {
	var annonce_id = 0;

	var i = 0;
	while (i < data.length) {
		const el = data[i];
		annonce_id = data[i].annonce_id;
		//alert(el);
		var ev = {
			id: el.id,
			title: el.description,
			start: new Date(el.start_time),
			end: new Date(el.end_time),
			isDraggable: false,
		};
		if (
			events.find((obj) => {
				return obj.id === ev.id && obj.title === ev.title;
			})
		) {
			i++;
		} else {
			events.push(ev);
			i++;
			id_from_db++;
		}
	}

	const adjEvents = events.map((it, ind) => ({
		...it,
		isDraggable: false,
	}));
	const [myEvents, setMyEvents] = useState(adjEvents);

	const { user, logoutUser } = useContext(AuthContext);

	const { publishSlots } = useContext(AuthContext);

	const [draggedEvent, setDraggedEvent] = useState();
	const [displayDragItemInCell, setDisplayDragItemInCell] = useState(true);
	const [counters, setCounters] = useState({ item1: 0, item2: 0 });
	const eventPropGetter = useCallback(
		(event) => ({
			...(event.isDraggable ? { className: 'isDraggable' } : { className: 'nonDraggable' }),
		}),
		[],
	);
	//,

	const handleDragStart = useCallback((event) => setDraggedEvent(event), []);

	const dragFromOutsideItem = useCallback(() => draggedEvent, [draggedEvent]);

	const customOnDragOver = useCallback(
		(dragEvent) => {
			// check for undroppable is specific to this example
			// and not part of API. This just demonstrates that
			// onDragOver can optionally be passed to conditionally
			// allow draggable items to be dropped on cal, based on
			// whether event.preventDefault is called
			if (draggedEvent !== 'undroppable') {
				console.log('preventDefault');
				dragEvent.preventDefault();
			}
		},
		[draggedEvent],
	);

	const handleDisplayDragItemInCell = useCallback(() => setDisplayDragItemInCell((prev) => !prev), []);

	const moveEvent = useCallback(
		({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
			const { allDay } = event;
			if (!allDay && droppedOnAllDaySlot) {
				event.allDay = true;
			}

			setMyEvents((prev) => {
				const id = event.id;
				const existing = prev.find((ev) => ev.id === event.id) ?? {};
				const filtered = prev.filter((ev) => ev.id !== event.id);
				return [...filtered, { ...existing, start, end, allDay }];
			});
		},
		[setMyEvents],
	);

	/*
  const handleSelectSlot = useCallback(
    ({ start, end }) => {
      const title = window.prompt('Nom du creneau')
      if (title) {
        setEvents((prev) => [...prev, { start, end, title }])
      }
    },
    [setEvents]
  )
*/
	const newEvent = useCallback(
		(event) => {
			setMyEvents((prev) => {
				const idList = prev.map((item) => item.id);
				const newId = Math.max(...idList) + id_from_db + 1;
				const title = window.prompt('Nom du creneau');
				if (title) {
					return [...prev, { ...event, title, id: newId, isDraggable: true }];
				} else {
					return [...prev];
				}
			});
		},
		[setMyEvents],
	);

	const onDropFromOutside = useCallback(
		({ start, end, allDay: isAllDay }) => {
			if (draggedEvent === 'undroppable') {
				setDraggedEvent(null);
				return;
			}

			const { name } = draggedEvent;
			const event = {
				title: formatName(name, counters[name]),
				start,
				end,
				isAllDay,
			};
			setDraggedEvent(null);
			setCounters((prev) => {
				const { [name]: count } = prev;
				return {
					...prev,
					[name]: count + 1,
				};
			});
			newEvent(event);
		},
		[draggedEvent, counters, setDraggedEvent, setCounters, newEvent],
	);

	const resizeEvent = useCallback(
		({ event, start, end }) => {
			setMyEvents((prev) => {
				const existing = prev.find((ev) => ev.id === event.id) ?? {};
				const filtered = prev.filter((ev) => ev.id !== event.id);
				return [...filtered, { ...existing, start, end }];
			});
		},
		[setMyEvents],
	);

	const handleSubmit = async (e) => {
		e.preventDefault();
		var i = 0;
		while (i < myEvents.length) {
			console.log('ev:' + myEvents[i].title + myEvents[i].start + myEvents[i].end);
			publishSlots(annonce_id, myEvents[i].title, myEvents[i].start, myEvents[i].end);
			i++;
		}
	};

	const defaultDate = useMemo(() => new Date(), []);

	return (
		<Fragment>
			<DemoLink fileName="dndOutsideSource">
				<Card className="dndOutsideSourceExample">
					<div className="inner">
						<div className="login_form form_box">
							<form onSubmit={handleSubmit}>
								<InputBox class="submit_btn" type="submit" value="Engreistrer" />
							</form>
						</div>
					</div>

					<div>
						<label>
							<input type="checkbox" checked={displayDragItemInCell} onChange={handleDisplayDragItemInCell} />
							Display dragged item in cell while dragging over
						</label>
					</div>
				</Card>
			</DemoLink>
			<div className="height600">
				<DragAndDropCalendar
					defaultDate={defaultDate}
					defaultView={Views.WEEK}
					dragFromOutsideItem={displayDragItemInCell ? dragFromOutsideItem : null}
					draggableAccessor="isDraggable"
					eventPropGetter={eventPropGetter}
					events={myEvents}
					localizer={localizer}
					min={new Date(0, 0, 0, 6, 0, 0)}
					max={new Date(0, 0, 0, 22, 0, 0)}
					onDropFromOutside={onDropFromOutside}
					onDragOver={customOnDragOver}
					onEventDrop={moveEvent}
					onEventResize={resizeEvent}
					onSelectSlot={newEvent}
					data={data}
					resizable
					selectable
				/>
			</div>
		</Fragment>
	);
}
DnDOutsideResource.propTypes = {
	localizer: PropTypes.instanceOf(DateLocalizer),
};
