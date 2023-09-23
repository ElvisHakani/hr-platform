import { Component } from "react"

//Ketu fillon Functional component
function FunctionalComp() {

    let fname = "Relando"

return(
    <>
    <h1>Pershendetje</h1>
    </>
)

}
export {FunctionalComp}


// Ketu fillon Class component
 class ClassComp extends Component {

    constructor(){
        super(this.props);
    }

    componentDidMount(){

        console.log("Komponenti u be mount");

    }

    componentWillUnmount(){
        console.log("Komponentni u hoq nga DOM");
    }

    fname = "Vrapi"

    handleSubmit(){

    }

    ckemi(){
        console.log("ckemi");
    }


    render(){

        this.handleSubmit()

        return(
            <>
            <h1>Pershendetje {this.fname}</h1>
            </>
        )
    }

}
export default ClassComp
