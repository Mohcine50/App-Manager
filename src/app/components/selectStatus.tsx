"use client";
import React from "react";
import * as Select from "@radix-ui/react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCheck,
	faChevronDown,
	faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
const SelectStatus = () => {
	return (
		<Select.Root>
			<Select.Trigger className="inline-flex items-center justify-start px-2 py-3">
				<Select.Value placeholder="Status" />
				<Select.Icon>
					<FontAwesomeIcon icon={faChevronDown} />
				</Select.Icon>
			</Select.Trigger>
			<Select.Portal>
				<Select.Content className="overflow-hidden bg-white rounded-md">
					<Select.ScrollUpButton>
						<FontAwesomeIcon icon={faChevronUp} />
					</Select.ScrollUpButton>
					<Select.Viewport className="p-[5px]">
						<Select.Group>
							<Select.Item
								value="Deleted"
								className="text-[13px] leading-none text-violet-500 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-purple-600 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-orange-600 data-[highlighted]:text-yellow-500"
							>
								<Select.ItemText>Deleted</Select.ItemText>
								<Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
									<FontAwesomeIcon icon={faCheck} />
								</Select.ItemIndicator>
							</Select.Item>
							<Select.Item
								value="Live"
								className="text-[13px] leading-none text-violet-500 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-purple-600 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-orange-600 data-[highlighted]:text-yellow-500"
							>
								<Select.ItemText>Live</Select.ItemText>
								<Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
									<FontAwesomeIcon icon={faCheck} />
								</Select.ItemIndicator>
							</Select.Item>
						</Select.Group>
					</Select.Viewport>
				</Select.Content>
			</Select.Portal>
		</Select.Root>
	);
};

export default SelectStatus;
