import GreetPropType from "./greet.types";

const Greet = ({ name }: GreetPropType) => {
  return (
    <>
      <span>Hello {name ? name : "Guest"}</span>
      {name ? "Hello again" : ""}
    </>
  );
};
export default Greet;
