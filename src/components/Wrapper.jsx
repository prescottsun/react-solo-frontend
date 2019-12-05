import React from "react";
import { Section, Columns } from "bloomer";

const Wrapper = props => {
    return (
        <Section>
            <Columns isCentered>{props.children}</Columns>
        </Section>
    );
};

export default Wrapper;