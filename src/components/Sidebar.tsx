import { ReplyIcon } from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <main className="w-full lg:w-1/3 lg:ml-6 mt-6 lg:mt-0">
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
                TWO HOURS AGO | <ReplyIcon className="inline-block w-4 h-4" /> 5
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
    </main>
  );
};

export default Sidebar;
