import { resourcesLinks,platformLinks,communityLinks } from "@/constants";

const Footer = () =>{
    return(
        <footer className="mt-20 border-t py-10 border-neutral-700">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                        <h3 className="text-md font-semibold mb-4">Resources</h3>
                        <ul>
                            {resourcesLinks.map((resource,index)=>(
                                <li key={index} >
                                    <a className="text-neutral-500 hover:text-neutral-700" href={resource.href}>{resource.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-md font-semibold mb-4">Platforms</h3>
                        <ul>
                            {platformLinks.map((platform,index)=>(
                                <li key={index} >
                                    <a className="text-neutral-500 hover:text-neutral-700" href={platform.href}>{platform.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div>
                        <h3 className="text-md font-semibold mb-4">Platforms</h3>
                        <ul>
                            {communityLinks.map((community,index)=>(
                                <li key={index} >
                                    <a className="text-neutral-500 hover:text-neutral-700" href={community.href}>{community.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
        </footer>
    )
}
export default Footer;