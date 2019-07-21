module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define('contact', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            title: DataTypes.STRING,
            value: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            type: DataTypes.STRING
        },
        {
            freezeTableName: true,
        }
    );

    return Contact;
}
