export default function DivSection({children, id, className}) {
    return <div id={id} className={`flex flex-col items-center gap-[50px] px-10 scroll-mt-[50px] ${className}`}>{children}</div>
}