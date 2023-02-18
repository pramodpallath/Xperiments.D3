/*Prepare Data Start*/
var nodeType = {
    Microservice: "microservice",
    APIGateway: "apigateway",
    BFF : "bff",
    Queue : "queue",
    WebUI : "webui",
    MobUI : "mobui",
    ESB : "esb"
};
var nodeNames = {
    Orchestrator: "Orchestrator",
    APIGateway: "API Gateway",
    TalabatWeb : "Talabat Web",
    TalabatMobApp : "Talabat App",
    AECB:"AECB",
    InternalDBR: "Internal DBR",
    BFF : "BFF",
    UILandingPageProductSelection: "Landing Page Product Selection",
    PartnerProduct : "Partner Product Microservice",
    UIPersonalDetails : "Update Personal Details",
    OTPService : "OTP Service",
    UIOTPVerification : "Mobile / Email OTP Validation",
    ESB : "Tibco ESB",
    ApplicationDedupe : "Application Dedupe",
    UIEmploymentDetails : "Employment Details",
    UIUpdateEIDA : "Update EIDA",
    OCRService : "OCR Service",
    UIReviewConfirmOCR : "Review & Confirm OCR",
    EDMSService : "EDMS Service",
    UIEFRBiometricAuth: "EFR Biometric Authentication",
    EFRAuthService : "EFR Authentication",
    DedupeService : "Dedupe Service",
    AECBService : "AECB Service",
    InternalDBRService : "Internal DBR Service",
    BRMSService : "BRMS Service",
    CustomerDetailMemoVerification : "Customer Detail & Memo Verification",
    UIAdditionalDetails : "Additional Details (IBAN, Residency...)",
    EligibilityCheckService : "Eligibility Service",
    UIProductConfiguration : "Product Configuration",
    UIAddressPrefernece : "Address Preferences, Summary Review",
    UIBusinessProcess : "Business Process Reviewers & Approver",
    TRSDScreening : "TRSD Screening",
    CIDCreation : "CID Creation",
    EFREnrollment : "EFR Enrollment",
    CardIssuance : "Card Issuance",
    SMSRegistration : "SMSRegistration",
    Notification : "Notification",
    MIBActivation : "MIB Activation",
    WhatsappBankingRegistration : "Whatsapp Banking Registration",
    AddressContactUpdate : "Address & Contact Update"

}
var direction = {
    Outward: "out",
    Inward: "in",
    BiDirectional: "bi"
}

var rawData = [
    { name: nodeNames.Orchestrator, type: nodeType.Microservice, group: "wf-1", relations: [] },
    {
        name: nodeNames.APIGateway, type: nodeType.APIGateway, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.TalabatMobApp, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.APIGateway, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.TalabatWeb, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.APIGateway, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.AECB, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.InternalDBR, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.BFF, type: nodeType.BFF, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.UILandingPageProductSelection, type: nodeType.WebUI, group: "wf-1", 
        relations: [
            { name: nodeNames.BFF, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.PartnerProduct, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.UIPersonalDetails, type: nodeType.WebUI, group: "wf-1", 
        relations: [
            { name: nodeNames.BFF, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.OTPService, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.UIOTPVerification, type: nodeType.WebUI, group: "wf-1", 
        relations: [
            { name: nodeNames.BFF, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.ESB, type: nodeType.ESB, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.ApplicationDedupe, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.UIEmploymentDetails, type: nodeType.WebUI, group: "wf-1", 
        relations: [
            { name: nodeNames.BFF, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.UIUpdateEIDA, type: nodeType.WebUI, group: "wf-1", 
        relations: [
            { name: nodeNames.BFF, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.OCRService, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.UIReviewConfirmOCR, type: nodeType.WebUI, group: "wf-1", 
        relations: [
            { name: nodeNames.BFF, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.EDMSService, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.UIEFRBiometricAuth, type: nodeType.WebUI, group: "wf-1", 
        relations: [
            { name: nodeNames.BFF, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.EFRAuthService, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.DedupeService, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.AECBService, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.InternalDBRService, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.BRMSService, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.CustomerDetailMemoVerification, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.UIAdditionalDetails, type: nodeType.WebUI, group: "wf-1", 
        relations: [
            { name: nodeNames.BFF, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.EligibilityCheckService, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.UIProductConfiguration, type: nodeType.WebUI, group: "wf-1", 
        relations: [
            { name: nodeNames.BFF, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.UIAddressPrefernece, type: nodeType.WebUI, group: "wf-1", 
        relations: [
            { name: nodeNames.BFF, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.UIBusinessProcess, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.TRSDScreening, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.CIDCreation, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.EFREnrollment, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.CardIssuance, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.SMSRegistration, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.Notification, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.MIBActivation, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.WhatsappBankingRegistration, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
    {
        name: nodeNames.AddressContactUpdate, type: nodeType.Microservice, group: "wf-1", 
        relations: [
            { name: nodeNames.Orchestrator, direction: direction.Outward, sequence: 1 }
        ]
    },
];
/*Prepare Data End*/