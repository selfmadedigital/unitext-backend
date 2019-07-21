module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define('review', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            user: DataTypes.STRING,
            user_picture: DataTypes.STRING,
            rating: DataTypes.INTEGER,
            text:
                {
                    type: DataTypes.TEXT,
                    allowNull:
                        false
                }
            ,
            date:
            DataTypes.DATE,
            allowed:
            DataTypes.INTEGER

        },
        {
            freezeTableName: true,
        }
        )
    ;

    return Review;
}
