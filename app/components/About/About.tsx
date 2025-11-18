import Image from "next/image";

export default function About() {
    return(
        <div className="flex flex-col px-10 py-10 gap-2">
            <p className="text-2xl pb-10">About me</p>
            <div className="flex gap-10 items-center">
                <Image
                    className="rounded-xl"
                    src="/IMG_3256.jpeg"
                    alt="User picture"
                    width={250}
                    height={250}
                />
            <p className="text-md">
                Hello, I am Senior frontend developer with 6+ years of industry experience, I have worked on multiple projects and have a great hands on experience on building financial solutions and Saas products.
            </p>
            </div>
        </div>
    )
}