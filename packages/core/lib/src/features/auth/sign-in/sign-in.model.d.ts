import { INotificationService } from '../../../domain';
export declare class SignInModel {
    private readonly props;
    private readonly selector;
    email: string;
    password: string;
    constructor(props: object, selector: {
        notification: INotificationService;
    });
    setEmail: (text: string) => void;
    setPassword: (text: string) => void;
    onSubmit: () => void;
}
//# sourceMappingURL=sign-in.model.d.ts.map