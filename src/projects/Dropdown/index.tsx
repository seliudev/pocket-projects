import {type FC, useState} from "react";
import Button from '@atlaskit/button/new';

const DownArrowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 10L12 15L17 10" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
);

type Option = {
    label: string;
    value: string;
};

const options = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Orange", value: "orange" },
];

const DropdownButton: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<Option | null>(null);

    const handleSelect = (option: Option) => {
        setSelected(option);
        setIsOpen(false);
    };

    return (
        <div className="flex flex-col items-center mt-10 w-full h-full">
        <div className="relative w-52">
            <Button
                appearance="discovery"
                iconAfter={DownArrowIcon}
                onClick={() => setIsOpen((prev) => !prev)}
                shouldFitContainer
            >
                {selected ? selected.label : "Select a fruit"}
            </Button>

            {isOpen && (
                <ul className="absolute left-0 right-0 mt-1 rounded-md border border-gray-200 bg-white shadow-lg z-10">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            onClick={() => handleSelect(option)}
                            className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100"
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
        </div>
    );
};

export default DropdownButton;