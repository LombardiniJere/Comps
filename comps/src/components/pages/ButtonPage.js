import Buttons from "../Buttons/Buttons";

import { GiAbdominalArmor, Gi3DHammer, GiBackPain, GiBattleAxe, GiBiceps } from "react-icons/gi";

function ButtonPage() {
  const handleOnClick = () => {};

  return (
    <div className="App">
      <Buttons onClick={ handleOnClick } primary rounded> 
        < GiBiceps />
        Primary !
      </Buttons>
      <Buttons secondary> 
        < GiBattleAxe />
        Secondary !
      </Buttons>
      <Buttons success>
        < Gi3DHammer />
        Success !
      </Buttons>
      <Buttons danger> 
        < GiBackPain />
        Danger !
      </Buttons>
      <Buttons warning>
        < GiAbdominalArmor />
        Warning !
      </Buttons>
      <Buttons rounded> Rounded !</Buttons>
      <Buttons outline> Outline !</Buttons>
    </div>
  );
}

export default ButtonPage;
