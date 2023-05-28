import { useContext } from 'react';
import { UserInfo } from 'components/UserInfo';
import AuthContext from '../context/AuthContext';

import { BodySection } from './common/BodySection';
import SectionTitle from './common/SectionTitle';

const Profil = () => {
    const { full_user } = useContext(AuthContext);
    return (
        <section>
            <BodySection id="profil" className="px-0 ">
                <div className="container">
                    <SectionTitle title="Mon profil" className="text-center" />
                    <div className="flex flex-wrap justify-center">
                        {full_user ? (
                            <div className="flex flex-col  bg-white border rounded items-center px-4 py-6 text-center border-gray-200/30 shadow-gray-200/80">
                                <div className="flex flex-row"> <div> Nom: </div> <div> {full_user.last_name} </div>  </div>
                                <div className="flex flex-row"> <div> Prenom: </div> <div> {full_user.first_name} </div>  </div>
                                <div className="flex flex-row"> <div> Role: </div> <div> {full_user.role} </div>  </div>
                            </div>

                        ) : (<></>)
                        }

                    </div>
                </div>
            </BodySection>

            <BodySection id="agence" className="px-0 ">
                <div className="container">
                    <SectionTitle title="Agence" className="text-center" />
                    <div className="flex flex-wrap justify-center">
                        {full_user && full_user.agence_id ? (
                            <div className="flex flex-col  bg-white border rounded ">
                                <div className="flex flex-row"> <div> Nom: </div> <div> {full_user.agence_name} </div>  </div>
                                <div className="flex flex-row"> <div> Ville: </div> <div> {full_user.agence_city} </div>  </div>
                                <div className="flex flex-row"> <div> Addresse: </div> <div> {full_user.agence_address} </div>  </div>
                                <div className="flex flex-row"> <div> Telephone: </div> <div> {full_user.agence_phone} </div>  </div>

                            </div>

                        ) : (<></>)
                        }

                    </div>
                </div>
            </BodySection>

        </section >


    );
};

export default Profil;