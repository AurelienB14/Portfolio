export default function DivSection({children, id}) {
    return <div id={id} className="flex flex-col mt-50 gap-[50px] px-10">{children}</div>
}