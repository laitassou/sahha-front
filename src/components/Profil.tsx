import { useContext, FC } from 'react';
import { UserInfo } from 'components/UserInfo';
import AuthContext from '../context/AuthContext';

import { BodySection } from './common/BodySection';
import SectionTitle from './common/SectionTitle';

import { ReactComponent as ClientSVG } from 'assets/client.svg';
import { ReactComponent as WorkerSVG } from 'assets/worker.svg';
import { ReactComponent as ManagerSVG } from 'assets/manager.svg';


interface params {
    type: string;
};

const Profil: FC<params> = ({ type }) => {
    const { full_user } = useContext(AuthContext);

    let use_svg = null;
    if (type === 'worker') {
        use_svg = <WorkerSVG />;
    }
    else if (type === "client") {
        use_svg = <ClientSVG />;

    }
    else if (type === "manager") {
        use_svg = <ManagerSVG />;

    }
    return (

        <section>
            <div className="w-5/5 bg-white rounded-md p-5 5 10">
                <div className="flex justify-between gap-2 ">
                    <div className="flex flex-col items-start gap-4 p-0">
                        <div className="font-raleway font-bold text-3xl leading-42 tracking-wider text-black flex-none order-0">
                            Mon profil
                        </div>
                        <div className="flex flex-row items-end gap-30 p-0 ">
                            <button type="button" className="icon-button">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13" stroke="#2B67F6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </button>
                        </div>
                    </div>
                    <div className="hidden max-w-xl lg:block"> {use_svg}
                    </div>
                </div>

                <div className="flex flex-col items-start gap-2 pt-5 ">
                    <div className="font-raleway font-bold text-24 leading-28 tracking-tight text-black flex-none order-0">Données</div>
                    <div className="flex flex-col items-start gap-2 p-0 w-full flex-none order-1">
                        <div className="flex flex-row items-center gap-5 p-2 bg-white shadow-md rounded-md flex-none order-0 w-full">
                            <div className="box-border flex flex-row items-start gap-10 p-2 0 w-95 border-r-1 border-blue-500 flex-none order-0" >
                                <div className="w-92 font-raleway font-medium text-18 leading-21 tracking-tight text-blue-500 flex-none order-0 border-r-1 border-blue-500" >Nom</div>
                            </div>
                            <div className="font-raleway font-normal text-18 leading-21 tracking-tight text-black flex-none order-1">
                                {full_user && full_user.last_name}
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-5 p-2 bg-white shadow-md rounded-md flex-none order-0 w-full">
                            <div className="box-border flex flex-row items-start gap-10 p-2 0 w-95 border-r-1 border-blue-500 flex-none order-0">
                                <div className="w-92 font-raleway font-medium text-18 leading-21 tracking-tight text-blue-500 flex-none order-0 border-r-1 border-blue-500" >Prenom</div>
                            </div>
                            <div className="font-raleway font-normal text-18 leading-21 tracking-tight text-black flex-none order-1">
                                {full_user && full_user.first_name}
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-5 p-2 bg-white shadow-md rounded-md flex-none order-0 w-full">
                            <div className="box-border flex flex-row items-start gap-10 p-2 0 w-95 border-r-1 border-blue-500 flex-none order-0" >
                                <div className="w-92 font-raleway font-medium text-18 leading-21 tracking-tight text-blue-500 flex-none order-0 border-r-1 border-blue-500" >Role</div>
                            </div>
                            <div className="font-raleway font-normal text-18 leading-21 tracking-tight text-black flex-none order-1">
                                {full_user && full_user.role}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-start gap-2 pt-5">
                    <div className="font-raleway font-bold text-24 leading-28 tracking-tight text-black flex-none order-0">Agence</div>
                    <div className="flex flex-col items-start gap-2 p-0 w-full flex-none order-1">
                        <div className="flex flex-row items-center gap-5 p-2 bg-white shadow-md rounded-md flex-none order-0 w-full">
                            <div className="box-border flex flex-row items-start gap-10 p-2 0 w-95 border-r-1 border-blue-500 flex-none order-0" >
                                <div className="w-92 font-raleway font-medium text-18 leading-21 tracking-tight text-blue-500 flex-none order-0 border-r-1 border-blue-500" >Nom</div>
                            </div>
                            <div className="font-raleway font-normal text-18 leading-21 tracking-tight text-black flex-none order-1">
                                {full_user && full_user.agence_name}
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-5 p-2 bg-white shadow-md rounded-md flex-none order-0 w-full">
                            <div className="box-border flex flex-row items-start gap-10 p-2 0 w-95 border-r-1 border-blue-500 flex-none order-0" >
                                <div className="w-92 font-raleway font-medium text-18 leading-21 tracking-tight text-blue-500 flex-none order-0 border-r-1 border-blue-500" >Ville</div>
                            </div>
                            <div className="font-raleway font-normal text-18 leading-21 tracking-tight text-black flex-none order-1">
                                {full_user && full_user.agence_city}
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-5 p-2 bg-white shadow-md rounded-md flex-none order-0 w-full">
                            <div className="box-border flex flex-row items-start gap-10 p-2 0 w-95 border-r-1 border-blue-500 flex-none order-0" >
                                <div className="w-92 font-raleway font-medium text-18 leading-21 tracking-tight text-blue-500 flex-none order-0 border-r-1 border-blue-500" >Telephone</div>
                            </div>
                            <div className="font-raleway font-normal text-18 leading-21 tracking-tight text-black flex-none order-1">
                                {full_user && full_user.agence_phone}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >


    );
};

export default Profil;