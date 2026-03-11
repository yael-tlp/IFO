import React from "react";
import {Accordion} from "react-bootstrap";
import BenefitsAccordion from "./BenefitsAccordion";
import WhatsUnionAccordion from "./WhatsUnionAccordion";
import HiveOfExpertsAccordion from "./HiveOfExpertsAccordion";
import LegalRepresentationAccordion from "./LegalRepresentationAccordion";
import DiplomaAccordion from "./DiplomaAccordion";
import ProfessionalSpaceAccordion from "./ProfessionalSpaceAccordion";
import RealizationBenefitsAccordion from "./RealizationBenefitsAccordion";
import PublishedArticlesAccordion from "./PublishedArticlesAccordion";
import AssociationIncorporationAccordion from "./AssociationIncorporationAccordion";
import RegisterAccordion from "./RegisterAccordion";
import ProfessionalGroupsAccordion from "./ProfessionalGroupsAccordion";
import RegulationsAccordion from "./RegulationsAccordion";
import FinancialConferenceAccordion from "./FinancialConferenceAccordion";
import ConferencesAndEventsAccordion from "./ConferencesAndEventsAccordion";

const BigAccordion = () => {
    return (
        <div>
            <Accordion dir="rtl">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion-header-custom">
            <span className="fw-bold" style={{fontSize: "2rem", color: "#fff"}}>
              למידע שימושי לחבר איגוד I.F.O
                <span
                    style={{
                        color: "#d3e1fd",
                        whiteSpace: "nowrap",
                        display: "inline-block",
                        marginRight: "0.5rem",
                        marginLeft: "0.5rem",
                        border: "2px solid #d3e1fd",
                        padding: "0.2rem 0.3rem",
                        borderRadius: "5px"
                    }}
                >
                  לחץ כאן
              </span>
            </span>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Accordion>
                            <Accordion.Item eventKey="1">
                                <WhatsUnionAccordion/>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <HiveOfExpertsAccordion/>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <LegalRepresentationAccordion/>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>הטבות לחברי האיגוד I.F.O</Accordion.Header>
                                <Accordion.Body>
                                    <BenefitsAccordion/>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <DiplomaAccordion/>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <RealizationBenefitsAccordion/>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>המרחב המקצועי של האיגוד</Accordion.Header>
                                <Accordion.Body>
                                    <ProfessionalSpaceAccordion/>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <ProfessionalGroupsAccordion/>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <PublishedArticlesAccordion/>
                            </Accordion.Item>
                            <Accordion.Item eventKey="10">
                                <AssociationIncorporationAccordion/>
                            </Accordion.Item>
                            <Accordion.Item eventKey="11">
                                <Accordion.Header>כנסים ואירועים I.F.O</Accordion.Header>
                                <Accordion.Body>
                                    <ConferencesAndEventsAccordion/>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="12">
                                <FinancialConferenceAccordion/>
                            </Accordion.Item>
                            <Accordion.Item eventKey="13">
                                <RegulationsAccordion/>
                            </Accordion.Item>
                            <Accordion.Item eventKey="14">
                                <RegisterAccordion/>
                            </Accordion.Item>
                        </Accordion>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default BigAccordion;
