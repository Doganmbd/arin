/* https://reactjs.org/docs/react-component.html */

import React from "react" 
import CardNine from "../9-class ile state yapısı/CardNine"
import CollapseNine from "../9-class ile state yapısı/CollapseNine"



class AppNine extends React.Component {
    render() {
        return (
            
<div className="container">
    <div className="row">
        <div className="card-group w-100">
            <div className="col">
     
            
                <CollapseNine name="collapseWidthExamplee1">
                    <CardNine title="React" body="Güzel ders" image="https://picsum.photos/id/1/200/300" />
                </CollapseNine>
                </div>
                <div className="col">
                <CollapseNine name="collapseWidthExamplee2">
                    <CardNine title ="HTML" body="basit ders" image="https://picsum.photos/id/100/200/300"/>
                </CollapseNine>
                </div>
                <div className="col">
                <CollapseNine name="collapseWidthExamplee3">
                    <CardNine  title="CSS" body="Şekil ders" image="https://picsum.photos/id/200/200/300"/>
                </CollapseNine>
                </div>
            
        </div>
    </div>
</div>
                            
        

        )
    }
}

export default AppNine