export default function Musecore({
  sheetURL,
  musescoreURL,
  title,
}: {
  sheetURL: string;
  musescoreURL: string;
  title: string;
}) {
  return (
    <>
      <iframe
        src={sheetURL}
        allowFullScreen
        allow="autoplay; fullscreen"
        className="aspect-[3/5] max-h-80screen w-10/12 max-sm:max-h-70screen max-sm:w-full"
      ></iframe>
      <span>
        <a
          href={musescoreURL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline dark:text-blue-300"
        >
          {title}
        </a>{' '}
        by{' '}
        <a
          href="https://musescore.com/user/11455091"
          className="text-blue-500 hover:underline dark:text-blue-300"
        >
          Mecoli1219
        </a>
      </span>
    </>
  );
}
