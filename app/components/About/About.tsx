import Image from "next/image";

export default function About() {
    return(
        <div className="flex flex-col items-center px-10 py-10 gap-2">
            <p className="text-4xl pb-10">About me</p>
            <div className="flex flex-col gap-10 items-center">
                <Image
                    src="/IMG_3256.jpeg"
                    alt="User picture"
                    width={250}
                    height={250}
                />
            <p className="text-xl">
                Hello, I am Senior frontend developer with 6+ years of industry experience, I have worked on multiple projects and have a great hands on experience on building financial solutions and Saas products.
            </p>
            </div>
        </div>
    )
}