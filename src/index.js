import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ApprovalButtons extends React.Component {
    render() {
        return  (
            <div> 
                <button onClick={function() {alert("Pressed Yes!")}}>Yes</button>
                <button>No</button>
            </div>

        );
    }
}

class DisplayOutfit extends React.Component {
    render() {
        return (
            <div classId="Outfit Display">
                {/*!-- The core Firebase JS SDK is always required and must be listed first -->*/}
                <script src="/__/firebase/7.13.1/firebase-app.js"></script>

                {/*<!-- TODO: Add SDKs for Firebase products that you want to use
                        https://firebase.google.com/docs/web/setup#available-libraries -->*/}
                <script src="/__/firebase/7.13.1/firebase-analytics.js"></script>

                {/*<!-- Initialize Firebase -->*/}
                <script src="/__/firebase/init.js"></script>
                Current Outfit
            </div>
        );
    }
}
ReactDOM.render(
    <DisplayOutfit />,
    document.getElementById('root')
);
