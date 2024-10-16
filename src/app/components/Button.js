export default function Button({children}) {
    return (
        <button className="w-full bg-dark-navy text-white rounded-full font-bold p-4 hover:bg-gradient-to-b hover:from-neon-blue hover:to-han-purple">
            {children}
        </button>
    );
}