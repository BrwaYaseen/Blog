import Image from "next/image";

export default function SportsPage() {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto p-4">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-card p-4 rounded-md">
          <h2 className="text-xl font-bold">Post Title 1</h2>
          <Image
            src="/path/to/post-thumbnail-1.jpg"
            alt="Post Thumbnail 1"
            className="w-full h-auto rounded-md"
            width={400}
            height={300}
          />
        </div>
        <div className="bg-card p-4 rounded-md">
          <h2 className="text-xl font-bold">Post Title 2</h2>
          <Image
            src="/path/to/post-thumbnail-2.jpg"
            alt="Post Thumbnail 2"
            className="w-full h-auto rounded-md"
            width={400}
            height={300}
          />
        </div>
        <div className="bg-card p-4 rounded-md">
          <h2 className="text-xl font-bold">Post Title 3</h2>
          <Image
            src="/path/to/post-thumbnail-3.jpg"
            alt="Post Thumbnail 3"
            className="w-full h-auto rounded-md"
            width={400}
            height={300}
          />
        </div>
        <div className="bg-card p-4 rounded-md">
          <h2 className="text-xl font-bold">Post Title 4</h2>
          <Image
            src="/path/to/post-thumbnail-4.jpg"
            alt="Post Thumbnail 4"
            className="w-full h-auto rounded-md"
            width={400}
            height={300}
          />
        </div>
      </div>
      <aside className="w-full lg:w-1/3 lg:ml-6 mt-6 lg:mt-0">
        <div className="bg-card p-4 rounded-md">
          <h3 className="text-lg font-bold text-primary">Top Stories</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-start space-x-4">
              <span className="text-primary text-lg font-bold">1</span>
              <div>
                <h4 className="text-md font-semibold">
                  Watch ChatGPT’s new voice mode mimic accents and correct
                  pronunciation
                </h4>
                <p className="text-muted-foreground text-sm">JESS WEATHERBED</p>
                <p className="text-muted-foreground text-xs">
                  TWO HOURS AGO | <ReplyIcon className="inline-block w-4 h-4" />{" "}
                  5
                </p>
              </div>
              <Image
                src="/placeholder.svg"
                alt="Story image"
                className="w-16 h-16 rounded-md"
                height={20}
                width={20}
              />
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-primary text-lg font-bold">2</span>
              <div>
                <h4 className="text-md font-semibold">
                  A first look at Apple Intelligence and its (slightly) smarter
                  Siri
                </h4>
                <p className="text-muted-foreground text-sm">ALLISON JOHNSON</p>
                <p className="text-muted-foreground text-xs">
                  JUL 31 | <ReplyIcon className="inline-block w-4 h-4" /> 60
                </p>
              </div>
              <Image
                src="/placeholder.svg"
                alt="Story image"
                className="w-16 h-16 rounded-md"
                height={20}
                width={20}
              />
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-primary text-lg font-bold">3</span>
              <div>
                <h4 className="text-md font-semibold">
                  Reddit CEO says Microsoft needs to pay to search the site
                </h4>
                <p className="text-muted-foreground text-sm">ALEX HEATH</p>
                <p className="text-muted-foreground text-xs">
                  JUL 31 | <ReplyIcon className="inline-block w-4 h-4" /> 89
                </p>
              </div>
              <Image
                src="/placeholder.svg"
                alt="Story image"
                className="w-16 h-16 rounded-md"
                height={20}
                width={20}
              />
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-primary text-lg font-bold">4</span>
              <div>
                <h4 className="text-md font-semibold">
                  Mark Cuban and a team of VC leaders back Kamala Harris for
                  president
                </h4>
                <p className="text-muted-foreground text-sm">ALEX HEATH</p>
                <p className="text-muted-foreground text-xs">
                  JUL 31 | <ReplyIcon className="inline-block w-4 h-4" /> 89
                </p>
              </div>
              <Image
                src="/placeholder.svg"
                alt="Story image"
                className="w-16 h-16 rounded-md"
                height={20}
                width={20}
              />
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

function ReplyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  );
}

function XIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
