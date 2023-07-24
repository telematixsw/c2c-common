/************************************************************************
 *                                                                       *
 *  Certificate Service -  Car2Car Core                                  *
 *                                                                       *
 *  This software is free software; you can redistribute it and/or       *
 *  modify it under the terms of the GNU Affero General Public License   *
 *  License as published by the Free Software Foundation; either         *
 *  version 3   of the License, or any later version.                    *
 *                                                                       *
 *  See terms of license at gnu.org.                                     *
 *                                                                       *
 *************************************************************************/
package org.certificateservices.custom.c2x.etsits102941.v131.generator;

import org.certificateservices.custom.c2x.etsits102941.v131.datastructs.messagesca.EtsiTs102941Data;
import org.certificateservices.custom.c2x.etsits103097.v131.datastructs.secureddata.EtsiTs103097DataSigned;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.basic.Signature;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.secureddata.HeaderInfo;
import org.certificateservices.custom.c2x.ieee1609dot2.datastructs.secureddata.SignerIdentifier;

/**
 * Result of a verification of a signed EtsiTs102941Data message containing signed identifier and
 * header info, secret key used in response if applicable,  along with a deserialized inner message.
 */
public class VerifyResult<T> {

    Signature.SignatureChoices signAlg;
    SignerIdentifier signerIdentifier;
    HeaderInfo headerInfo;
    T value;

    /**
     * Main constructor
     *
     * @param signAlg the algorithm used in the signature.
     * @param signerIdentifier the signerIdentifier if related object was signed, otherwise null.
     * @param headerInfo the header info object if related object was signed, otherwise null.
     * @param value the inner message data.
     */
    public VerifyResult(Signature.SignatureChoices signAlg, SignerIdentifier signerIdentifier, HeaderInfo headerInfo, T value) {
        this.signAlg = signAlg;
        this.signerIdentifier = signerIdentifier;
        this.headerInfo = headerInfo;
        this.value = value;
    }


    /**
     *
     * @return the algorithm used in signature. Used to check agains whitelist.
     */
    public Signature.SignatureChoices getSignAlg(){
        return signAlg;
    }
    /**
     *
     * @return the signerIdentifier if related object was signed, otherwise null.
     */
    public SignerIdentifier getSignerIdentifier() {
        return signerIdentifier;
    }

    /**
     *
     * @return the header info object if related object was signed, otherwise null.
     */
    public HeaderInfo getHeaderInfo() {
        return headerInfo;
    }

    /**
     *
     * @return the inner message.
     */
    public T getValue() {
        return value;
    }

    @Override
    public String toString() {
        return "VerifyResult [\n"+
                "  signAlg=" + (signAlg != null ? signAlg: "NONE") + ",\n" +
                "  signerIdentifier=" + (signerIdentifier != null ? signerIdentifier.toString().replaceAll("\n", "\n  ") : "NONE") + ",\n" +
                "  headerInfo=" + (headerInfo != null ? headerInfo.toString().replaceAll("\n", "\n  ") : "NONE") +  ",\n"+
                "  value=" + getValue().toString().replaceAll("\n","\n  ") + "\n" +
                "]";
    }


    EtsiTs103097DataSigned outerDataSigned;

    public EtsiTs103097DataSigned getOuterDataSigned() {
        return outerDataSigned;
    }

    public void setOuterDataSigned(EtsiTs103097DataSigned outerDataSigned) {
        this.outerDataSigned = outerDataSigned;
    }

    EtsiTs102941Data requestData;

    public EtsiTs102941Data getRequestData() {
        return requestData;
    }

    public void setRequestData(EtsiTs102941Data requestData) {
        this.requestData = requestData;
    }
}
