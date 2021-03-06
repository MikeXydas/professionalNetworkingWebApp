package entities;

import java.io.Serializable;
import javax.persistence.*;

/**
 * The primary key class for the Application database table.
 * 
 */
@Embeddable
public class ApplicationPK implements Serializable {
	//default serial version id, required for serializable classes.
	private static final long serialVersionUID = 1L;

	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int idApplication;

	@Column(name="Advertisment_idAdvertisment", insertable=false, updatable=false)
	private int advertisment_idAdvertisment;

	@Column(name="Advertisment_User_idUser", insertable=false, updatable=false)
	private int advertisment_User_idUser;

	public ApplicationPK() {
	}
	public int getIdApplication() {
		return this.idApplication;
	}
	public void setIdApplication(int idApplication) {
		this.idApplication = idApplication;
	}
	public int getAdvertisment_idAdvertisment() {
		return this.advertisment_idAdvertisment;
	}
	public void setAdvertisment_idAdvertisment(int advertisment_idAdvertisment) {
		this.advertisment_idAdvertisment = advertisment_idAdvertisment;
	}
	public int getAdvertisment_User_idUser() {
		return this.advertisment_User_idUser;
	}
	public void setAdvertisment_User_idUser(int advertisment_User_idUser) {
		this.advertisment_User_idUser = advertisment_User_idUser;
	}

	public boolean equals(Object other) {
		if (this == other) {
			return true;
		}
		if (!(other instanceof ApplicationPK)) {
			return false;
		}
		ApplicationPK castOther = (ApplicationPK)other;
		return 
			(this.idApplication == castOther.idApplication)
			&& (this.advertisment_idAdvertisment == castOther.advertisment_idAdvertisment)
			&& (this.advertisment_User_idUser == castOther.advertisment_User_idUser);
	}

	public int hashCode() {
		final int prime = 31;
		int hash = 17;
		hash = hash * prime + this.idApplication;
		hash = hash * prime + this.advertisment_idAdvertisment;
		hash = hash * prime + this.advertisment_User_idUser;
		
		return hash;
	}
}