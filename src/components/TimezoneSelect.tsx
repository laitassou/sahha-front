import { useMemo, Fragment, FC } from 'react';
import { Calendar, Views, DateLocalizer } from 'react-big-calendar';
import DemoLink from './DemoLink.component';
import events from '../resources/events';

interface Props {
	localizer: DateLocalizer;
}

export const Timeslots: FC<Props> = ({ localizer }) => {
	const defaultDate = useMemo(() => new Date(), []);
	return (
		<Fragment>
			<DemoLink />
			<div className="height600">
				<Calendar
					defaultDate={defaultDate}
					defaultView={Views.WEEK}
					events={events}
					localizer={localizer}
					step={15}
					timeslots={8}
				/>
			</div>
		</Fragment>
	);
};
