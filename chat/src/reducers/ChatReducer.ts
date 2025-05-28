import { Msg } from "@/types/Msg";

type AddAction = {
    type: 'add',
    payload: {
        user: string;
        text: string;
    }
}

type ChatActions = AddAction;
export const ChatReducer = (list: Msg[], action: ChatActions) => {
    switch(action.type) {
        case 'add':
            return [...list, {
                id: list.length,
                user: action.payload.user,
                text: action.payload.text
            }];
        default:
            return list;

    }
}