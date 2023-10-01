import React from "react";
import { Route, Switch } from "react-router-dom";
import First from "./first";
import Second from "./second";
import Calc from "./component/calc";
import Gradiant from "./component/gradiantColor";
import SwiperFirst from "./component/Slider/Swiperfirst";
import SwiperSecond from "./component/Slider/SwiperSecond";
import SwiperThird from "./component/Slider/SwiperThird/Index";
import SwiperFour from "./component/Slider/SwiperFour/Index";
import SwiperFive from "./component/Slider/SwipFive/Index";
import SwiperSix from "./component/Slider/SwiperSix";
import ImageScale from "./component/ImageScale";
import Dropdown from "./component/DropDown";
import DrapAndDrop from "./component/dragdrop";
import ChangeComponent from "./component/setTimeout";
import Rangesilder from "./component/sliderrange/rangesilder";
import Timer from "./component/Timer";
import MultipleSelectCheckbox from "./component/multipleSelect";
import Aos from "./component/Aos";
import Deleteitem from "./component/DeleteElement";
import Practice from "./component/Practice/Practice";
import Todo from "./component/TOdo";
import IncreamentDecrement from "./component/IncDec";
import ErrorPage from "./component/ErrorPage";
const Approute = () => {

  return (
    <>
      <Switch >
        <Route path={"/calc"} component={Calc} />
        <Route path={"/"} exact component={First} />
        <Route path={"/second"} component={Second} />
        <Route path={"/gradiant"} component={Gradiant} />
        <Route path={"/swiperfirst"} component={SwiperFirst} />
        <Route path={"/swiperSecond"} component={SwiperSecond} />
        <Route path={"/swiperThird"} component={SwiperThird} />
        <Route path={"/swiperFour"} component={SwiperFour} />
        <Route path={"/swiperfive"} component={SwiperFive} />
        <Route path={"/swipersix"} component={SwiperSix} />
        <Route path={"/image-scale"} component={ImageScale} />
        <Route path={"/dropdown"} component={Dropdown} />
        <Route path={"/drag-and-drop"} component={DrapAndDrop} />
        <Route path={"/change-component"} component={ChangeComponent} />
        <Route path={"/range"} component={Rangesilder} />
        <Route path={"/timer"} component={Timer} />
        <Route path={"/multipleSelect"} component={MultipleSelectCheckbox} />
        <Route path={"/effect"} component={Aos} />
        <Route path={"/elm-delete"} component={Deleteitem} />
        <Route path={"/practice"} component={Practice} />
        <Route path={"/to-do"} component={Todo} />
        <Route path={"/inc-dec"} component={IncreamentDecrement} />
        <Route path={"*"} component={ErrorPage} />

      </Switch>
    </>
  );
}

export default Approute;
