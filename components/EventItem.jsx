import Link from "next/link";

const EventItem = ({ link, eventName, description }) => {
  return (
    <Link href={link} className="w-full">
      <div className="p-4 text-left w-full hover:shadow-md rounded-md shadow-slate-200 border-slate-200">
        <p className="">{eventName}</p>
        <p className="text-sm text-slate-600 mt-1">
          {`${description?.slice(0, 12)}...`}
        </p>
      </div>
    </Link>
  );
};

export default EventItem;
