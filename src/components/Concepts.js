import ConceptItem from "./ConceptItem";

function Concepts(props) {
  return (
    <div>
      <ul id="concepts">
        <ConceptItem
          image={props.conceptsList[0].image}
          title={props.conceptsList[0].title}
          description={props.conceptsList[0].description}
        />
        <ConceptItem
          image={props.conceptsList[1].image}
          title={props.conceptsList[1].title}
          description={props.conceptsList[1].description}
        />
        <ConceptItem
          image={props.conceptsList[2].image}
          title={props.conceptsList[2].title}
          description={props.conceptsList[2].description}
        />
      </ul>
    </div>
  );
}
export default Concepts;
