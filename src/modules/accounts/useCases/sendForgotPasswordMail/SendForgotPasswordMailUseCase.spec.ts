import { UserRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UserRespositoryInMemory";
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory";
import { AppError } from "@shared/errors/AppError";
import { SendForgotPassordMailUseCase } from "./SendForgotPassordMailUseCase"

let sendForgotPassowrdMailUseCase: SendForgotPassordMailUseCase;
let usersRepositoryInMemory: UserRepositoryInMemory;
let dateProvider: DayjsDateProvider;
let usersTokenRepositoryInMemory: UsersTokensRepositoryInMemory;
let mailProvider: MailProviderInMemory;

describe("Send Forgot Mail", () => {

    beforeEach(() => {
        usersRepositoryInMemory  = new UserRepositoryInMemory();
        dateProvider = new DayjsDateProvider();
        usersTokenRepositoryInMemory = new  UsersTokensRepositoryInMemory();
        mailProvider = new MailProviderInMemory();

        sendForgotPassowrdMailUseCase = new SendForgotPassordMailUseCase(
            usersRepositoryInMemory,
            usersTokenRepositoryInMemory,
            dateProvider,
            mailProvider
        )
    });

    it("should be able to send a forgot password mail to user", async () => {

        const sendMail = jest.spyOn(mailProvider, "sendMail");
        
        await usersRepositoryInMemory.create({
            driver_license: "664168",
            email: "ipoweg@pebdin.cf",
            name: "Nettie Ballard",
            password: "1234"
        });

        await sendForgotPassowrdMailUseCase.execute("ipoweg@pebdin.cf");

        expect(sendMail).toHaveBeenCalled();
    });

    it("should be able to send email if user does not exists", async () => {
        await expect(
            sendForgotPassowrdMailUseCase.execute("kerga@honakgop.pk")
        ).rejects.toEqual(new AppError("User does not exists!"))
    });

    it("should be able to create an users token", async () => {
       const generateTokenMail = jest.spyOn(usersTokenRepositoryInMemory, "create");

       usersRepositoryInMemory.create({
        driver_license: "234262",
        email: "ergo@timjo.gh",
        name: "Alta Adkins",
        password: "1234"
    });

    await sendForgotPassowrdMailUseCase.execute("ergo@timjo.gh");

    expect(generateTokenMail).toBeCalled();


    })
});