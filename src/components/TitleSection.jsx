export default function TitleSection(children) {
    return <h3 
        className="flex justify-center text-[40px]"
    >
        {children.text}
    </h3>
}