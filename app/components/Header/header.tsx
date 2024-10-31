import cssStyle from "./header.module.css"
const Header = (props: any) => {
    console.log(props)
    return <div >
        <h1 className={cssStyle.h1} >{props.Touqeer}</h1>
    <h2>This is is Header2</h2>
    <h3>This is Header3</h3></div>;
};
export default Header;