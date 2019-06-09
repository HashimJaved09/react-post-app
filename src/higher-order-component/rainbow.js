import React, { Component } from 'react';

const colours = ['red', 'yellow', 'amber', 'teal', 'blue', 'green', 'grey', 'orange', 'lime', 'purple'];

// function Rainbow(WrappedComponent) {
//     return class extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 className: colours[Math.floor(Math.random() * 10)] + '-text'
//             };
//         }
//         componentDidMount() {
//             setTimeout(() => {
//                 this.setState({
//                     className: colours[Math.floor(Math.random() * 10)] + '-text'
//                 });
//             }, 1000);
//         }
//         render() {
//             return <WrappedComponent {...this.props} />;
//         }
//     };
// }

const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'yellow', 'amber', 'teal', 'blue', 'green', 'grey', 'orange', 'lime', 'purple'];
    let className = colours[Math.floor(Math.random() * 10)] + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default Rainbow;