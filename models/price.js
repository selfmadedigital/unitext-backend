module.exports = (sequelize, DataTypes) => {
    const Price = sequelize.define('price', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            lang: DataTypes.STRING,
            title: DataTypes.STRING,
            subtitle: DataTypes.STRING,
            content: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            price: DataTypes.DECIMAL
        },
        {
            freezeTableName: true,
        }
    );

    return Price;
}
