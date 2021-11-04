import React, { useEffect, useState } from 'react';
import IPage from '../interfaces/page';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

const AboutPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {
    const [message, setMessage] = useState<string>('');
    let name=1;
    console.log(name);
    console.log(props)
    useEffect(() => {

        let number = props.match.params.number;

        if (number)
        {
            setMessage(`The Number is ${number}`);
        }
        else
        {
            setMessage(`No number provided!`);
        }
    }, [props])

    return (
        <div>
            <p>{message}</p>
            <Link to="/">Go to the home page!</Link>
        </div>
    );
}

export default AboutPage;