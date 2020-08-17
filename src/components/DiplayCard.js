import React from "react";
import { Link } from "react-router-dom";
import { Card } from "semantic-ui-react";
import useFlipped from "../hooks/useFlipped";
import "./HealthBar.css";
import "./DisplayCard.css";
import useEditType from "../hooks/useEditType";
import API from "../helpers/API";

const DisplayCard = ({ poke, changeStat, teamId }) => {
  const { flipped, toggleFlipped } = useFlipped();
  const { editType, setEditType } = useEditType();

  const renderSprite = (poke) => {
    const { back_sprite, front_sprite } = poke;
    if (flipped) {
      return back_sprite
        ? back_sprite
        : require(`../img/Missingno${this.randomNum(1, 5)}.png`);
      // return back_sprite
    }
    return front_sprite;
  };

  const showPokeName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  const showTypes = (array) => {
    return array.map((type) => (
      <Link
        to={{
          pathname: "/types",
          state: { type: type.name },
        }}
        key={type.name}
      >
        <div className={`type-icon ${type.name} space`}>{type.name}</div>
      </Link>
    ));
  };

  const handleDoubleClick = (stat) => {
    setEditType(stat);
  };

  const validateField = (val, stat) => {
    // If current hp is more than hp
    if (
      stat === "current_hp" &&
      (val > poke.hp || val < 0 || !Number.isInteger(+val))
    ) {
      return false;
    }

    // If hp is less than current_hp
    if (
      stat === "hp" &&
      (val < poke.current_hp || !Number.isInteger(+val))
    ) {
      return false;
    }

    // If x is Not a Number or less than one
    if (stat !== "current_hp" && (!Number.isInteger(+val) || val < 1)) {
      return false;
    }

    return true;
  };

  const updateStat = (stat, val) => {
    const newStatData = {
      id: poke.id,
      stat: stat,
      value: val,
    };
    API.updateTeamPokemon(newStatData).then(() =>
      changeStat(teamId, poke.id, stat, val)
    );
  };

  const handleSubmit = (e, stat) => {
    e.preventDefault();
    const value = e.target[stat].value;
    if (validateField(value, stat)) {
      updateStat(stat, value);
    }

    return setEditType(undefined);
  };

  const handleBlur = () => {
    return setEditType(undefined);
  };

  const showStatOrEdit = (stat) => {
    if (stat === editType) {
      return (
        <span>
          <form
            autoComplete="off"
            onSubmit={(e) => handleSubmit(e, stat)}
            onBlur={handleBlur}
          >
            <input
              className="stat-input"
              name={`${stat}`}
              maxlength="3"
              autoFocus
            />
          </form>
        </span>
      );
    }
    return poke[stat];
  };

  const progressBar = (percentage) => {
    let color = "green";
    if (percentage < 60) {
      color = "yellow";
    }
    if (percentage < 30) {
      color = "red";
    }

    return (
      <div
        className={`health-bar-fluid ${color}-bar`}
        style={{ width: `${percentage}%` }}
      ></div>
    );
  };

  return (
    <>
      <Card className="display-card">
        <div>
          <div className="image sprite" onClick={() => toggleFlipped()}>
            <img src={renderSprite(poke)} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{showPokeName(poke.name)}</div>
          </div>
          <div className="types-content">
            <span className="to-center">{showTypes(poke.types)}</span>
          </div>
        </div>
      </Card>
      <Card className="display-info-card">
        <div>
          <div className="content">
            <div className="header">
              <div className="lvl" onClick={() => handleDoubleClick("level")}>
                <strong>Lv:{showStatOrEdit("level")}</strong>
              </div>{" "}
              <br />
              <div className="hp-element">
                <span
                  className="hp-text"
                  onClick={() => handleDoubleClick("hp")}
                >
                  <strong>HP:</strong>
                </span>
                <div className="health-bar">
                  <div
                    className="health-bar-glass"
                    onClick={() => handleDoubleClick("current_hp")}
                  >
                    {progressBar((poke.current_hp * 100.0) / poke.hp)}
                  </div>
                </div>

                <strong
                  className="hp stat max-hp"
                  onClick={() => handleDoubleClick("hp")}
                >
                  {showStatOrEdit("hp")}
                </strong>
                <strong className="hp">/</strong>
                <strong
                  className="hp stat current-hp"
                  onClick={() => handleDoubleClick("current_hp")}
                >
                  {showStatOrEdit("current_hp")}
                </strong>
              </div>
              <br />
              <div className="stats">
                <div
                  className="stat"
                  onClick={() => handleDoubleClick("speed")}
                >
                  {" "}
                  SPEED: <strong>{showStatOrEdit("speed")}</strong>{" "}
                </div>
                <div
                  className="stat"
                  onClick={() => handleDoubleClick("special_def")}
                >
                  {" "}
                  SPECIAL DEFENCE:{" "}
                  <strong>{showStatOrEdit("special_def")}</strong>
                </div>
                <div
                  className="stat"
                  onClick={() => handleDoubleClick("special_atk")}
                >
                  {" "}
                  SPECIAL ATTACK:{" "}
                  <strong>{showStatOrEdit("special_atk")}</strong>
                </div>
                <div
                  className="stat"
                  onClick={() => handleDoubleClick("defence")}
                >
                  {" "}
                  DEFENCE: <strong>{showStatOrEdit("defence")}</strong>{" "}
                </div>
                <div
                  className="stat"
                  onClick={() => handleDoubleClick("attack")}
                >
                  {" "}
                  ATTACK: <strong>{showStatOrEdit("attack")}</strong>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default DisplayCard;
