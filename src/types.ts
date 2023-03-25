import { IconType } from "react-icons"
import { IconBaseProps } from "react-icons/lib/esm/iconBase"



export interface headerStateI {
	headerButtonData: buttonDataType
}
export interface sidebarStateI {
	stateSidebarBox: sidebarBoxDataType
}

type ss = (IconType | string | React.FunctionComponent<any> | React.ComponentClass<any, any>)


export type buttonDataType = { theme: string, text: string, to: string, icon: string }[]
export type buttonData = { theme: string, text: string, icon: string }


export type sidebarBoxDataType = { title: string, iconComp: string }[]