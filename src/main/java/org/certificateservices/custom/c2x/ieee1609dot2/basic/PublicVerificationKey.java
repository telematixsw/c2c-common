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
package org.certificateservices.custom.c2x.ieee1609dot2.basic;

import java.io.IOException;

import org.certificateservices.custom.c2x.asn1.coer.COERChoice;
import org.certificateservices.custom.c2x.asn1.coer.COERChoiceEnumeration;
import org.certificateservices.custom.c2x.asn1.coer.COEREncodable;
import org.certificateservices.custom.c2x.ieee1609dot2.basic.EccP256CurvePoint.EccP256CurvePointChoices;

/**
 * This structure represents a public key and states with what algorithm the public key is to be used. Cryptographic mechanisms are defined in 5.3.
 * <p>
 * An EccP256CurvePoint within a PublicVerificationKey structure is invalid if it indicates the choice x- only.
 * 
 * @author Philip Vendil, p.vendil@cgi.com
 *
 */
public class PublicVerificationKey extends COERChoice {
	
	
	private static final long serialVersionUID = 1L;
	
	public enum PublicVerificationKeyChoices implements COERChoiceEnumeration{
		ecdsaNistP256,
		ecdsaBrainpoolP256r1;

		@Override
		public COEREncodable getEmptyCOEREncodable() throws IOException {
			return new EccP256CurvePoint();
		}
	}
	
	/**
	 * Constructor used when encoding.
	 */
	public PublicVerificationKey(PublicVerificationKeyChoices choice, EccP256CurvePoint value) throws IllegalArgumentException{
		super(choice, value);
		if(value.getType() == EccP256CurvePointChoices.xonly){
			throw new IllegalArgumentException("EccP256CurvePoint of type xonly is invalid for structure PublicVerificationKey");
		}
	}


	/**
	 * Constructor used when decoding.
	 */
	public PublicVerificationKey() {
		super(PublicVerificationKeyChoices.class);
	}
		
	/**
	 * Returns the type of key.
	 */
	public PublicVerificationKeyChoices getType(){
		return (PublicVerificationKeyChoices) choice;
	}

	@Override
	public String toString() {
		return "PublicVerificationKey [" + choice + "=" +  value.toString().replace("EccP256CurvePoint ", "") + "]";
	}
	
}
