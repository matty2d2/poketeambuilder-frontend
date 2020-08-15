import React from "react";
import { Link } from "react-router-dom";
import Types from "../helpers/Types-list";
import "../Types.css";
import "./TypeCharts.css";

const TypeChartsPage = (props) => {
  // useEffect(
  //   () => {
  //     fetch("http://localhost:3000/stealdata")
  //   },
  //   []
  // )

  const renderCharts = () => {
    return Object.keys(Types).map((type) => (
      <div key={type} className="chart-container">
        <img
          className="chart-image"
          src={require(`../img/type-charts/` + Types[type] + `-types.png`)}
          alt={`a ${type} damage relation chart`}
        />
      </div>
    ));
  };

  return (
    <>
      <div className="chart-info">
        <h1>Chart info</h1>
        <p>
          The huge chart here shows the strengths and weaknesses of each
          dual-type, along with the number of Pokémon have that type. The type
          of the attack move is along the top row. Follow that down to the
          corresponding row to see how effective it is.
        </p>
        <p>The total number of Pokémon with each type are listed.</p>

        <h2>Chart key</h2>
        <div>
          {" "}
          <span className="type-fx-icon type-fx-0">0</span> No effect (0%)
        </div>
        <div>
          {" "}
          <span className="type-fx-icon type-fx-25">¼</span> Resistant (25%)
        </div>
        <div>
          {" "}
          <span className="type-fx-icon type-fx-50">½</span> Not very effective
          (50%)
        </div>
        <div>
          {" "}
          <span className="type-fx-icon type-fx-100">&nbsp;</span> Normal (100%)
        </div>
        <div>
          {" "}
          <span className="type-fx-icon type-fx-200">2</span> Super-effective
          (200%)
        </div>
        <div>
          {" "}
          <span className="type-fx-icon type-fx-400">4</span> Doubly effective
          (400%)
        </div>

        <h2>Unused Types</h2>
        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.normal },
            }}
          >
            <span className="type-icon normal">NORMAL</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.ice },
            }}
          >
            <span className="type-icon ice">ICE</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.normal },
            }}
          >
            <span className="type-icon normal">NORMAL</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.poison },
            }}
          >
            <span className="type-icon poison">POISON</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.normal },
            }}
          >
            <span className="type-icon normal">NORMAL</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.bug },
            }}
          >
            <span className="type-icon bug">BUG</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.normal },
            }}
          >
            <span className="type-icon normal">NORMAL</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.rock },
            }}
          >
            <span className="type-icon rock">ROCK</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.normal },
            }}
          >
            <span className="type-icon normal">NORMAL</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.ghost },
            }}
          >
            <span className="type-icon ghost">GHOST</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.normal },
            }}
          >
            <span className="type-icon normal">NORMAL</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.steel },
            }}
          >
            <span className="type-icon steel">STEEL</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.fire },
            }}
          >
            <span className="type-icon fire">FIRE</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.grass },
            }}
          >
            <span className="type-icon grass">GRASS</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.fire },
            }}
          >
            <span className="type-icon fire">FIRE</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.ice },
            }}
          >
            <span className="type-icon ice">ICE</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.fire },
            }}
          >
            <span className="type-icon fire">FIRE</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.fairy },
            }}
          >
            <span className="type-icon fairy">FAIRY</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.electric },
            }}
          >
            <span className="type-icon electric">ELECTRIC</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.fighting },
            }}
          >
            <span className="type-icon fighting">FIGHTING</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.electric },
            }}
          >
            <span className="type-icon electric">ELECTRIC</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.poison },
            }}
          >
            <span className="type-icon poison">POISON</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.electric },
            }}
          >
            <span className="type-icon electric">ELECTRIC</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.dark },
            }}
          >
            <span className="type-icon dark">DARK</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.ice },
            }}
          >
            <span className="type-icon ice">ICE</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.poison },
            }}
          >
            <span className="type-icon posion">POISON</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.ice },
            }}
          >
            <span className="type-icon ice">ICE</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.bug },
            }}
          >
            <span className="type-icon bug">BUG</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.fighting },
            }}
          >
            <span className="type-icon fighting">Fighting</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.ground },
            }}
          >
            <span className="type-icon ground">GROUND</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.fighting },
            }}
          >
            <span className="type-icon fighting">Fighting</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.fairy },
            }}
          >
            <span className="type-icon fairy">FAIRY</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.poison },
            }}
          >
            <span className="type-icon poison">POISON</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.psychic },
            }}
          >
            <span className="type-icon psychic">PSYCHIC</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.poison },
            }}
          >
            <span className="type-icon poison">POISON</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.steel },
            }}
          >
            <span className="type-icon steel">STEEL</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.poison },
            }}
          >
            <span className="type-icon poison">POISON</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.fairy },
            }}
          >
            <span className="type-icon fairy">FAIRY</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.ground },
            }}
          >
            <span className="type-icon ground">GROUND</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.fairy },
            }}
          >
            <span className="type-icon fairy">FAIRY</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.psychic },
            }}
          >
            <span className="type-icon psychic">PSYCHIC</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.bug },
            }}
          >
            <span className="type-icon bug">BUG</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.bug },
            }}
          >
            <span className="type-icon bug">BUG</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.dragon },
            }}
          >
            <span className="type-icon dragon">DRAGON</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.bug },
            }}
          >
            <span className="type-icon bug">BUG</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.dark },
            }}
          >
            <span className="type-icon dark">DARK</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.rock },
            }}
          >
            <span className="type-icon rock">ROCK</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.ghost },
            }}
          >
            <span className="type-icon ghost">GHOST</span>
          </Link>
        </div>

        <div className="types-container">
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.dark },
            }}
          >
            <span className="type-icon dark">DARK</span>
          </Link>
          &nbsp;
          <Link
            to={{
              pathname: "/types",
              state: { type: Types.fairy },
            }}
          >
            <span className="type-icon fairy">FAIRY</span>
          </Link>
        </div>
      </div>

      <div>
        <h1>Dual Type Chart</h1>
        <div className="charts-container">{renderCharts()}</div>
      </div>
    </>
  );
};

export default TypeChartsPage;
