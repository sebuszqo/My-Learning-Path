import './SingleItem.css'

export const SingleItem = (props) => {

    const bigLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
    return <li key={props.item.phone_number}>
        <img src={`https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${props.item.picture}`}
             alt="avatar"/>
        <div>
            <p>First Name: <strong>{bigLetter(props.item.first_name)}</strong></p>
            <p>Last Name: <strong>{bigLetter(props.item.last_name)}</strong></p>
            <p>Email: <strong>{props.item.email}</strong></p>
        </div>
    </li>
}

