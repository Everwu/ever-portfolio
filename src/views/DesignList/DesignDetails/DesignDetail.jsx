import React from 'react';
import { useParams } from 'react-router-dom';

import EndlessDetail from 'views/DesignList/DesignDetails/EndlessDetail/EndlessDetail';
import IDrinkDetail from 'views/DesignList/DesignDetails/IDrinkDetail/IDrinkDetail';
import EatHereDetail from 'views/DesignList/DesignDetails/EatHereDetail/EatHereDetail'
import KitakataDetail from 'views/DesignList/DesignDetails/KitakataDetail/KitakataDetail';
import BigPixelDetail from 'views/DesignList/DesignDetails/BigPixelDetail/BigPixelDetail';
import BabyCostReport from 'views/DesignList/DesignDetails/BabyCostReport/BabyCostReport';

/*
class DesignDetail extends Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

        const name = this.props.match.params.name;
        let designDetailComponent = <div></div>;
        switch (name){
            case "endless":
                designDetailComponent = <EndlessDetail></EndlessDetail>;
                break;
            case "idrink":
                designDetailComponent = <IDrinkDetail></IDrinkDetail>;
                break;
            case "eathere":
                designDetailComponent = <EatHereDetail></EatHereDetail>;
                break;
            case "kitakata":
                designDetailComponent = <KitakataDetail></KitakataDetail>;
                break;
            case "bigpixel":
                designDetailComponent = <BigPixelDetail></BigPixelDetail>;
                break;
            case "babycostreport":
                designDetailComponent = <BabyCostReport></BabyCostReport>;
                break;
            default:
                designDetailComponent = <div></div>;
        }


        return(
            <div id="Design_Detail">
                {designDetailComponent}
            </div>
        )
    }
}*/

        
        function DesignDetail() {
            let { name } = useParams();
            let designDetailComponent = <div></div>;
            switch (name){
                case "endless":
                    designDetailComponent = <EndlessDetail></EndlessDetail>;
                    break;
                case "idrink":
                    designDetailComponent = <IDrinkDetail></IDrinkDetail>;
                    break;
                case "eathere":
                    designDetailComponent = <EatHereDetail></EatHereDetail>;
                    break;
                case "kitakata":
                    designDetailComponent = <KitakataDetail></KitakataDetail>;
                    break;
                case "bigpixel":
                    designDetailComponent = <BigPixelDetail></BigPixelDetail>;
                    break;
                case "babycostreport":
                    designDetailComponent = <BabyCostReport></BabyCostReport>;
                    break;
                default:
                    designDetailComponent = <div></div>;
            }
            return <div id="Design_Detail">
            {designDetailComponent}
                   </div>;
          }
        

    
export default DesignDetail;