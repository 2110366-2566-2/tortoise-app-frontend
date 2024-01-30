import Image, { StaticImageData } from "next/image"

export default function PetCard({petName, imgSrc} : {petName: string, imgSrc: StaticImageData}) {

    return(
        <div className="m-8 w-1/5 h-[300px] shadow-xl border border-2 border-black rounded-lg">
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={imgSrc}
                    alt="Pet Picture"
                    width={300}
                    height={300}
                    className="object-fit rounded-lg"
                    />
            </div>
            <div className="text-center text-xl font-bold">{petName}</div>
        </div>
    )
}