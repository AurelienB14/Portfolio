export default function DivSection({children, id}) {
    return <div id={id} className="flex flex-col pt-50 mx-[50px] gap-[50px]">{children}</div>
}