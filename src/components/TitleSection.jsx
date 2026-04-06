export default function TitleSection(children) {
    return <h3 
        className="flex justify-center text-[40px] text-center"
    >
        {children.text}
    </h3>
}