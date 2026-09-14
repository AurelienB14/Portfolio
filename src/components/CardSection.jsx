export default function CardSection({children, className, noPadding=false}) {
    if (noPadding) {
        return <div className={`flex border-[#0081ce] rounded-xl border bg-[#0a0a14] ${className}`}>{children}</div>
    } else {
        return <div className={`flex border-[#0081ce] rounded-xl border bg-[#0a0a14] p-[25px] sm:p-[50px] ${className}`}>{children}</div>
    }
}