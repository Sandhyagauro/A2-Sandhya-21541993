import { useState } from 'react';

function NewCompany(props) {
    const {contact, companies, setCompanies} = props;
    const [company_name, setName] = useState('');
    const [company_address, setAddress] = useState('Home');

    async function createCompany(e) {
        e.preventDefault();

        const response = await fetch('http://localhost/api/contacts/' + contact.id + '/companies', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                company_name,
                company_address
            })
        });

        const data = await response.json();

        if (data.id) {
            setCompanies([...companies, data]);
        }

        setName('');
        setAddress('');

    }

	return (
        <form onSubmit={createCompany} onClick={(e) => e.stopPropagation()} className='new-company'>
            <input type='text' placeholder='Company Name' onChange={(e) => setName(e.target.value)} value={company_name}/>
            <input type='text' placeholder='Company Address' onChange={(e) => setAddress(e.target.value)} value={company_address}/>
            <button className='button green' type='submit'>Add {contact.name} Company</button>
        </form>
	);
}

export default NewPhone;