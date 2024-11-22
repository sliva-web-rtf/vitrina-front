import { isEmail, isTelephone } from "@/shared/lib/helpers/validators";
import Link from "next/link";
import { ReactNode } from "react";
import { MailtoLink } from "../MailtoLink/MailtoLink";
import { TelLink } from "../TelLink/TelLink";

interface DeepLinkProps {
    link: string;
    children: ReactNode;

    blank?: boolean;
}

export const DeepLink = (props: DeepLinkProps) => {
    const { link, children, blank = true } = props;

    if (isEmail(link)) {
        return <MailtoLink email={link}>{children}</MailtoLink>;
    }

    if (isTelephone(link)) {
        return <TelLink tel={link}>{children}</TelLink>;
    }

    return <Link href={link} target={blank ? "_blank" : "_self"} rel="nofollow noopener noreferrer">{children}</Link>;
};