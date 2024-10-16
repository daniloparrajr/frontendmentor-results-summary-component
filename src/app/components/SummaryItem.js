export default function SummaryItem({label, score, icon, theme = "danger"}) {

    const themeLib = {
        "danger": {
            "color": "text-red",
            "background": "bg-red/5",
        },
        "warning": {
            "color": "text-yellow",
            "background": "bg-yellow/5",
        },
        "success": {
            "color": "text-green",
            "background": "bg-green/5",
        },
        "info": {
            "color": "text-blue",
            "background": "bg-blue/5",
        }
    };

    return (
        <div className={`${themeLib[theme].background} p-4 flex items-center justify-between rounded-xl`}>
            <dt className={`${themeLib[theme].color} flex items-center gap-3`}>{icon} {label}</dt>
            <dd className="text-dark-navy font-bold">{score} <span className="opacity-50">/ 100</span></dd>
        </div>
    );
}