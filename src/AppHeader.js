import React from 'react';
import './AppHeader.css'
import AppFooter from './AppFooter';


class AppHeader extends React.Component {
   
    componentWillMount() {
        // this.myData = // API
        //   window.document.title ='asas'

    }
    onclieckEvent(){
        this.props.myevent("dfgfg")
    }


    render() {
        const uname = this.props.userName;
        const phNo = this.props.phNo;
        let persons = [{ name: 'z' }, { name: 'y' }]
        const myVar = 1;
        //myVar =3;
        const footerMessage= '@vam'



        return (
            <div id='qw' className="myclassname">
                {persons.map(person => {
                    return <div>my name is {person.name}</div>
                })}

                <AppFooter message={footerMessage} username={uname}></AppFooter>

                this is my emcet rank {myVar}

                {this.props.vvvv}

                this is from props . My name is {uname}
            </div>
        )

    }


}

// default props
// proptypes.AppHeader={
//     userName:'mani'
// }

export default AppHeader;
