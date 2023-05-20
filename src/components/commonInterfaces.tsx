import MAIN_URL from 'utils/constants';

interface ClientResponse {
    id: number;
    django_id: number;
    first_name: string;
    last_name: string;
    phone_number: string;
    role: string;
    email_address: string;
};

export default ClientResponse;