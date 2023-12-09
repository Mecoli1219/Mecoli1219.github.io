export default function Musecore({ sheetURL, musescoreURL, title }: { sheetURL: string, musescoreURL: string, title: string }) {
    return <>
        <iframe src={sheetURL} allowFullScreen allow="autoplay; fullscreen" className=" w-10/12 max-sm:w-full aspect-square max-h-80screen"></iframe>
        <span>
            <a href={musescoreURL} target="_blank" rel="noopener noreferrer" className="dark:text-blue-300 text-blue-500 hover:underline">
                {title}
            </a> by <a href="https://musescore.com/user/11455091" className="dark:text-blue-300 text-blue-500 hover:underline">
                Mecoli1219
            </a>
        </span>
    </>
}