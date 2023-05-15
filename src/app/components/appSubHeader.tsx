import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function AppSubHeader({ id }: { id: string }): React.ReactElement {
	return (
		<div className="flex justify-end gap-2">
			<Link
				href={`/apps/edit/${id}`}
				className="flex items-center gap-1 px-2 py-1 text-green-500 border-2 border-green-500 rounded-md outline-none h-9"
			>
				<FontAwesomeIcon icon={faEdit} />
				<span>Edit</span>
			</Link>
			<button className="flex items-center gap-1 px-2 py-1 text-white rounded-md outline-none bg-indigo h-9">
				Export Json
			</button>
		</div>
	);
}

export default AppSubHeader;
